<?php

namespace App\Controller;

use App\Entity\User;
use Hackzilla\PasswordGenerator\Generator\ComputerPasswordGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PasswordForgottenController extends AbstractController
{
    #[Route('/password/forgotten', name: 'app_password_forgotten')]
    public function index(Request $request): Response
    {
        $email=$request->request->get('exampleInputEmail1');

        $generator = new ComputerPasswordGenerator();

        $generator
            ->setUppercase()
            ->setLowercase()
            ->setNumbers()
            ->setSymbols(false)
            ->setLength(12);

        $password = $generator->generatePasswords(10);
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $password
        );
        $user->setPassword($hashedPassword
        );
        /** @var User $user */
        $user=$this->getDoctrine()->getRepository(User::class)->findAllMatching($email);
        $user->setPassword($hashedPassword);
        $entityManager=$this->getDoctrine()->getManager();
        $entityManager->persist($user);

        return $this->render('password_forgotten/index.html.twig', [
            'controller_name' => 'PasswordForgottenController',
        ]);
    }
}
