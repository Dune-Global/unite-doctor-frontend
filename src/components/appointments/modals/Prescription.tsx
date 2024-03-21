"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/common/Button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { getCurrentDateTime } from '@/utils/getCurrentDateTime'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { appointmentStage, medicineTime } from '@/data/mock/appointment-prescription'
import { CirclePlus } from 'lucide-react'

type Props = {
    cellContent: string
}

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    age: z.string().min(1).max(3),
    gender: z.string().min(4).max(6),
    allergies: z.string().min(2).max(150),
    symptoms: z.string().min(2).max(150),
    disease: z.string().min(2).max(150),
    stage: z.string({
        required_error: "The stage is required",
    }),
    medicineName: z.string().min(2).max(100),
    dose: z.string().min(2).max(100),
    time: z.string({
        required_error: "The time is required",
    }),
    bloodPressure: z.string().min(2).max(100),
})

export default function Prescription({
    cellContent
}: Readonly<Props>) {
    const [currentDateTime, setCurrentDateTime] = useState<string>(getCurrentDateTime())

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            allergies: "",
            symptoms: "",
            disease: "",
            medicineName: "",
            dose: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    const handleTriggerClick = () => {
        setCurrentDateTime(getCurrentDateTime())
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger onClick={handleTriggerClick}>{cellContent}</DialogTrigger>
                <DialogContent className='bg-ugray-0 border-ugray-0 w-auto z-40'>
                    <DialogHeader>
                        <DialogTitle>E-prescription</DialogTitle>
                    </DialogHeader>
                    <div className='flex justify-end'>
                        <span className='text-ugray-400 text-xs'>
                            {currentDateTime}
                        </span>
                    </div>
                    <div >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: John" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Last name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Age</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Gender</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <FormField
                                        control={form.control}
                                        name="allergies"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Allergies</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='symptoms'
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Symptoms</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='disease'
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Disease</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="stage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Stage</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a stage" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            appointmentStage.map((stage) => (
                                                                <SelectItem key={stage.id} value={`${stage.stage}`}>{stage.stage}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div>
                                    <FormField
                                        control={form.control}
                                        name='medicineName'
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel className='flex flex-row gap-1 align-middle'>
                                                    <div>Medicine Name</div>
                                                    <button>
                                                        <CirclePlus className='text-ugray-400' size={16} />
                                                    </button>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <FormField
                                        control={form.control}
                                        name='dose'
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Dose</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="time"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Time</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select time" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            medicineTime.map((time) => (
                                                                <SelectItem key={time.id} value={`${time.time}`}>{time.time}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <FormField
                                        control={form.control}
                                        name='bloodPressure'
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Blood Pressure</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <Button type="submit" variant={"default"}>Submit</Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    )
}