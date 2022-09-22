<?php

namespace App\Controller;

use App\Entity\Product;
use App\Manager\ProductManager;
use App\Repository\ProductRepository;
use PhpParser\Node\Expr\Error;
use Stripe\Checkout\Session;
use Stripe\Exception\ApiErrorException;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/payment", name="payment")
     * @throws ApiErrorException
     */
    public function index(ProductRepository $productRepository,ProductManager $productManager): Response
    {
    /*    header('Content-Type: application/json');
        \Stripe\Stripe::setApiKey('sk_test_iF1Y0LxHULOvM8D8eQXHuJYp00jTTrjAPu');
        try {

            // retrieve JSON from POST body

            $json_str = file_get_contents('php://input');

            $json_obj = json_decode($json_str);

            $paymentIntent = \Stripe\PaymentIntent::create([

              //  'amount' => $this->calculateOrderAmount($json_obj->items),

                'currency' => 'usd',

            ]);

            $output = [

                'clientSecret' => $paymentIntent->client_secret,

            ];

            echo json_encode($output);

        } catch (Error $e) {

            http_response_code(500);

            echo json_encode(['error' => $e->getMessage()]);

        }*/
        if(!$this->getUser()){
            return $this->redirectToRoute('app_login');
        }
        /** @var Product $product */
        $product=$this->getDoctrine()->getRepository(Product::class)->find(3);
        return $this->render('payment/index.html.twig',[
            'user'=>$this->getUser(),
            'product'=>$product,
            'intentSecret' => $productManager->intentSecret($product),
            'STRIPE_PUBLIC_KEY_TEST'=>$_ENV['STRIPE_PUBLIC_KEY_TEST'],
            'STRIPE_PUBLIC_KEY_LIVE'=>$_ENV['STRIPE_PUBLIC_KEY_LIVE']

        ]);
    }
    function calculateOrderAmount(array $items): int {

        // Replace this constant with a calculation of the order's amount

        // Calculate the order total on the server to prevent

        // customers from directly manipulating the amount on the client

        return 1400;

    }
    /**
     * @Route("/user/subscription/{id}/paiement/load", name="subscription_paiement", methods={"GET", "POST"})
     * @param Product $product
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     * @throws \Exception
     */
    public function subscription(
        Product $product,
        Request $request,
        ProductManager $productManager
    ){
        /** @var User $user */
        $user = $this->getUser();

        if($request->getMethod() === "POST") {
            $resource = $productManager->stripe($_POST, $product);

            if(null !== $resource) {
                $productManager->create_subscription($resource, $product, $user);

                return $this->render('user/reponse.html.twig', [
                    'product' => $product
                ]);
            }
        }

        return $this->redirectToRoute('payment', ['id' => $product->getId()]);
    }

    /**
     * @Route("/user/payment/orders", name="payment_orders", methods={"GET"})
     * @param ProductManager $productManager
     * @return Response
     */
    public function payment_orders(ProductManager $productManager): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('login');
        }

        return $this->render('user/payment_story.html.twig', [
            'user' => $this->getUser(),
            'orders' => $productManager->getOrders($this->getUser()),
            'sumOrder' => $productManager->countSoldeOrder($this->getUser()),
        ]);
    }
    /**
     * @Route("/catalogue", name="catalogue")
     * @return Response
     */
    public function catalogue(){
        /** @var array $products */
        $products=$this->getDoctrine()->getRepository(Product::class)->findAll();
        return $this->render('catalogue/index.html.twig',['product'=>$products]);

    }
}
