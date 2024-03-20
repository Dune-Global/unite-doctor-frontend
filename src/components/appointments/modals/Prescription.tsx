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

type Props = {
    cellContent: string
}

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
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
                <DialogContent className='bg-ugray-0 border-ugray-0 w-auto'>
                    <DialogHeader>
                        <DialogTitle>E-prescription</DialogTitle>
                    </DialogHeader>
                    <div className='flex justify-end'>
                        <span className='text-ugray-400 text-xs'>
                            {currentDateTime}
                        </span>
                    </div>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className='flex flex-col md:flex-row justify-between md:gap-5 space-y-4'>
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
                                                <FormLabel>Patient name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Doe" {...field} />
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
        </div>
    )
}