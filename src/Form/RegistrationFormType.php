<?php

namespace App\Form;

use App\Entity\User;
use Doctrine\DBAL\Types\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\IsTrue;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $fileConstraints=[
            new File(array(
                'maxSize' => '10024k',
                'mimeTypes' => array(
                    'application/pdf',
                    'application/x-pdf',
                ),
                'mimeTypesMessage' => 'Please upload a valid PDF document',
            ))
        ];
        $builder

            ->add('firstname')
            ->add('name')
            ->add('email')
            ->add('plainPassword',RepeatedType::class,[ 'type'=>PasswordType::class,
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
                'first_options'=>['label'=>'Password'],
                'second_options'=>['label'=>'Repeat Password'],

            ])
            ->add('age',NumberType::class)
            ->add('telephone')

            ->add('file', \Symfony\Component\Form\Extension\Core\Type\FileType::class, array('label' => 'file','constraints'=>$fileConstraints))

            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'label'=> 'Je suis d\'accord',
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ]);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
