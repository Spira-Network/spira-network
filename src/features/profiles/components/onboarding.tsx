'use client'

import React from 'react'
import { useState } from 'react'
import {
    Credenza,
    CredenzaContent,
    CredenzaHeader,
    CredenzaTitle,
    CredenzaBody,
    CredenzaDescription,
    CredenzaTrigger,
} from '@/components/responsive-dialog'
import OnboardingCover from './onboarding-cover'
import Login from './login'
import FormWizard from './form-wizard'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'

enum WizardStep {
    Cover,
    Login,
    Form,
}

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState<WizardStep>(WizardStep.Cover)

    const handleConnect = () => setCurrentStep(WizardStep.Login)
    const handleLogin = () => setCurrentStep(WizardStep.Form)

    const content = () => {
        switch (currentStep) {
            case WizardStep.Cover:
                return <OnboardingCover onConnect={handleConnect} />
            case WizardStep.Login:
                return <Login onLogin={handleLogin} />
            case WizardStep.Form:
                return <FormWizard onComplete={handleClose} />
        }
    }

    const handleClose = () => {
        // Realizar la acción de cierre basada en el identificador de acción
        // Esto podría ser un push del router, una actualización de estado, etc.
        console.log('Cerrando con acción:')
        // Aquí podrías implementar la lógica específica basada en onCloseAction
    }

    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button className='h-10 rounded-full bg-[#9D84F9] px-5 py-2 font-heading text-base text-white'>
                    Launch Spira
                </Button>
            </CredenzaTrigger>
            <CredenzaContent className='bg-neutral-900 p-0'>
                <VisuallyHidden.Root>
                    <CredenzaHeader>
                        <CredenzaTitle>
                            {currentStep === WizardStep.Form ? 'Create your profile' : 'Welcome to Spira'}
                        </CredenzaTitle>
                        <CredenzaDescription>Description</CredenzaDescription>
                    </CredenzaHeader>
                </VisuallyHidden.Root>
                <CredenzaBody className='rounded-3xl'>{content()}</CredenzaBody>
            </CredenzaContent>
        </Credenza>
    )
}
