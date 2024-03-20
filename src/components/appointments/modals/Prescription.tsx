"use client"

import React from 'react'
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

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
    cellContent: string
}

const formSchema = z.object({
    patientname: z.string().min(2).max(50),
})

export default function Prescription({
    cellContent
}: Readonly<Props>) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            patientname: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>{cellContent}</DialogTrigger>
                <DialogContent className='bg-ugray-0 border-ugray-0'>
                    <DialogHeader>
                        <DialogTitle>E-prescription</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="patientname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Patient name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Please fill with care
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button variant="default" type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}