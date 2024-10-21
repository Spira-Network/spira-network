import { insertProfileSchema } from '@/drizzle/schema'
import { useState } from 'react'
import { z } from 'zod'
import { createProfile } from '../actions'

enum FormStep {
    Step1,
    Step2,
    Step3,
    Step4,
}

interface FormWizardProps {
    onComplete?: () => void
}

export default function FormWizard({ onComplete }: FormWizardProps) {
    const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.Step1)

    const renderStep = () => {
        switch (currentStep) {
            case FormStep.Step1:
                return <div>Step 1 content</div>
            case FormStep.Step2:
                return <div>Step 2 content</div>
            case FormStep.Step3:
                return <div>Step 3 content</div>
            case FormStep.Step4:
                return <div>Step 4 content</div>
        }
    }

    const onSubmit = async (values: z.infer<typeof insertProfileSchema>) => {
        if (currentStep < FormStep.Step4) {
            setCurrentStep(prev => prev + 1)
        } else {
            try {
                console.log('Submitting values:', values)
                // await createProfile(values)
                onComplete?.()
            } catch (error) {
                console.error('Error creating profile:', error)
                // Handle error
            }
        }
    }

    return (
        <div className='relative flex h-[600px] w-[400px] flex-col rounded-3xl bg-neutral-900 p-8'>
            <div className='mb-8 flex justify-center'>
                {[FormStep.Step1, FormStep.Step2, FormStep.Step3, FormStep.Step4].map(step => (
                    <div
                        key={step}
                        className={`mx-1 h-3 w-3 rounded-full ${
                            currentStep === step ? 'bg-violet-400' : 'bg-zinc-700'
                        }`}
                    />
                ))}
            </div>
            {renderStep()}
            <div className='mt-auto flex justify-between'>
                <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    disabled={currentStep === FormStep.Step1}
                    className='rounded-full bg-zinc-700 px-4 py-2 text-white disabled:opacity-50'>
                    Previous
                </button>
                <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    disabled={currentStep === FormStep.Step4}
                    className='rounded-full bg-violet-400 px-4 py-2 text-white disabled:opacity-50'>
                    {currentStep === FormStep.Step4 ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    )
}
