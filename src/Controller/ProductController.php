<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\User;
use App\Form\ProductType;
use Gedmo\Sluggable\Util\Urlizer;
use PhpParser\Node\Scalar\String_;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/product", name="product")
     */
    public function index(Request $request): Response
    {
        /** @var Product $monProduct */
        $monProduct = new Product();

        $form = $this->createForm(ProductType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            /** @var String $name */
            $name =$form->get('name')->getData();
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            /** @var  UploadedFile $uploadFile */
            $uploadFile = $form->get('image')->getData();
            if ($uploadFile === null) exit;
            $destination = $this->getParameter('files_directory');

            $originalFilename = pathinfo($uploadFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename) . '.' . $uploadFile->guessExtension();

            //$fileName = md5(uniqid()).'.'.$file->guessClientExtension();
            try {
                $uploadFile->move(
                    $destination,
                    $newFilename
                // $this->getParameter('files_directory'),


                );





            } catch (\Exception $e) {
                echo $e;
            }


            /** @var Product $monProduct */
            $monProduct->setImage($newFilename);
            $monProduct->setName($name);
            $monProduct->setPrice($form->get('price')->getData());
            /** @var ProductController $this */
            $entityManager = $this->getDoctrine()->getManager();
            /** @var Product $monProduct */
            $entityManager->persist($monProduct);

            $entityManager->flush();

        }
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'form' => $form->createView(),
            'request'=>$request,
        ]);
    }
}
