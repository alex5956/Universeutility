<?php

namespace App\Controller;


use App\Entity\Product;
use App\Entity\User;
use App\Form\UserType;
use App\Manager\ProductManager;
use App\Repository\UserRepository;
use Doctrine\DBAL\Types\TextType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Sluggable\Util\Urlizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Stripe\Stripe;
use Swift_Mailer;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class AcceuilController extends AbstractController
{
    private $sessionMy ;
    /**
     * @var EntityManagerInterface
     */
    protected EntityManagerInterface $em ;

    /**
     * AcceuilController constructor
     * @param SessionInterface $session
     */
    public function __construct(SessionInterface $session)

    {
        $this->sessionMy=$session;
        $this->sessionMy->set('acheteurBoolean','false');
    }

    /**
     * @Route("/", name="acceuil")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request,ProductManager $productManager)
    {

//        if ($request->files->get('user')) {
//            $test='c bon';
//            /** @var UploadedFile $file */
//            $file = $request->files->get('user')['file'];
//            if ($file === null) exit;
//            $destination = $this->getParameter('files_directory');
//            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
//            $newFilename = Urlizer::urlize($originalFilename) . '-' . uniqid() . '.' . $file->guessExtension();
//
//            //$fileName = md5(uniqid()).'.'.$file->guessClientExtension();
//            $file->move(
//                $destination,
//                $newFilename
//            // $this->getParameter('files_directory'),
//
//
//            );
//        }

//        /** @var User $user */
//        $user = new User();
//        $form2 = $this->createForm(UserType::class, $user);
//        if ($request->isXmlHttpRequest()) {
//            echo 'il y a une requête';
//            $file = $request->query->get('file');
//            if ($file === null) exit;
//            $destination = $this->getParameter('files_directory');
//            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
//            $newFilename = Urlizer::urlize($originalFilename) . '-' . uniqid() . '.' . $file->guessExtension();
//
//            //$fileName = md5(uniqid()).'.'.$file->guessClientExtension();
//            $file->move(
//                $destination,
//                $newFilename
//            // $this->getParameter('files_directory'),
//
//
//            );

//            return $this->redirectToRoute('/');
//
//        }
//
        $zipArchive= new \ZipArchive();
        /** @var User $user */
         $user=new User();
        $form2 = $this->createForm(UserType::class, $user);
        $form2->handleRequest($request);
        if ($form2->isSubmitted() && $form2->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            /** @var UploadedFile $task */
            $task = $form2->get('file')->getData();
            if($task===null) exit;
            $destination = $this->getParameter('files_directory');
            $originalFilename = pathinfo($task->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename) . '-' . uniqid() . '.' . $task->guessExtension();

            //$fileName = md5(uniqid()).'.'.$file->guessClientExtension();
            $task->move(
                $destination,
                $newFilename
            // $this->getParameter('files_directory'),
            );

    }


            // ... perform some action, such as saving the task to the database

//    }
        // ... perform some action, such as saving the task to the database

//    }
        // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
          /*   $entityManager = $this->getDoctrine()->getManager();
             $entityManager->persist($task);
            $entityManager->flush();*/



        return $this->render( 'acceuil/index.html.twig',[
            'form2' => $form2->createView(),

            'fichier'=>$request->files->all(),

            'fichier'=>$form2->get('file')->getData(),]
    );
    }
    /**
     * @Route("app_login_autocomplete", methods="GET", name="app_login_autocomplete")
     *
     */
    public function getUsersApi(UserRepository $userRepository, Request $request)
    {
        $users = $userRepository->findAllMatching($request->query->get('query'));

        return $this->json([
            'users' => $users
        ], 200, [], ['groups' => ['main']]);
    }

    /**
     * @Route ("/email" ,methods="POST")
     * @param Swift_Mailer $mailer
     * @param  Request $marequête
     * @return null
     */
    public function sendEMail( Swift_Mailer $mailer , request $marequête){
        $email = (new \Swift_Message('Hello'))
            ->setFrom('alexandre.marillesse@gmail.com')
            ->setTo('alexandre.marillesse@gmail.com');
       try {
           $mailer->send($email);
       }
       catch(\Swift_TransportException $e){
           echo $e->getMessage();
           return $this->render('email/registrations.html.twig',['exc'=>'coucou',]);     }
      return $this->redirectToRoute('acceuil');
    }

    /**
     ** @Route("/uploadAjax", name="uploadAjax")
     * @param Request $uneRequete
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public Function uploadAjax(Request $uneRequete){

            try {
                $test = 'c bon';
                $req = $uneRequete;

                /** @var UploadedFile $file */
                $file = $uneRequete->files->get('file');

                if ($file === null) exit;
                $destination = $this->getParameter('files_directory');
                $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = Urlizer::urlize($originalFilename) . '-' . uniqid() . '.' . $file->guessExtension();

                //$fileName = md5(uniqid()).'.'.$file->guessClientExtension();
                $file->move(
                    $destination,
                    $newFilename
                // $this->getParameter('files_directory'),

//
                );
            }
            catch (\Exception$e){
                echo $e->getMessage();
            }


        return $this->render('acceuil/index.html.twig',['uneRequete'=>$req]);
    }
    /**
     ** @Route("/downloadCV", name="download_cv")
     * @param Request $uneRequete
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public Function downloadCV()
    {
    ini_set('display_errors', 'On');
    $file=file_get_contents('../assets/files/CVAlexandreDevWeb3.pdf');
        return new Response($file, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="CV.pdf"'
        ]);
    }
}
