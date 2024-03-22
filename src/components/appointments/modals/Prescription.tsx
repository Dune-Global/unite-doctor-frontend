"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button as UButton } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input"
import { getCurrentDateTime } from '@/utils/getCurrentDateTime'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { appointmentStage, medicineTime } from '@/data/mock/appointment-prescription'
import { CalendarIcon, CirclePlus, CircleMinus } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

type Props = {
    cellContent: string
}


const formSchema = z.object({
    firstName: z.string({
        required_error: "The first name should contain atleast 2 characters"
    }).min(2, {
        message: "The first name should contain atleast 2 characters"
    }).max(50, {
        message: "The first name should contain atmost 50 characters"
    }),
    lastName: z.string({
        required_error: "The last name should contain atleast 2 characters"
    }).min(2, {
        message: "The last name should contain atleast 2 characters"

    }).max(50, {
        message: "The last name should contain atmost 50 characters"
    }),
    age: z.string({
        required_error: "The age is required",
    }).min(1, {
        message: "The age should contain atleast 1 character"
    }).max(3, {
        message: "The age should contain atmost 3 characters "
    }),
    gender: z.string().min(4).max(6),
    allergies: z.string().min(2, {
        message: "The allergies should contain atleast 2 characters"
    }).max(150, {
        message: "The allergies should contain atmost 150 characters"

    }),
    symptoms: z.string().min(2, {
        message: "The symptoms should contain atleast 2 characters"

    }).max(150, {
        message: "The symptoms should contain atmost 150 characters"

    }),
    disease: z.string().min(2, {
        message: "The disease should contain atleast 2 characters"
    }).max(150, {
        message: "The disease should contain atmost 150 characters"
    }),
    stage: z.string({
        required_error: "The stage is required",
    }),
    medicine: z.array(z.object({
        medicineName: z.string({
            required_error: "The medicine name is required",
        }).min(0).max(100, {
            message: "The medicine name should contain atmost 100 characters"
        }),
        dose: z.string({
            required_error: "The dose is required",
        }).min(2).max(255, {
            message: "The dose should contain atmost 255 characters"
        }),
        time: z.string({
            required_error: "The time is required",
        }),
    })),
    bloodPressure: z.string().min(0).max(100),
    nextChannelDate: z.date().optional(),
    weight: z.string().min(1).max(100),
    height: z.string().min(1).max(100),
    reports: z.array(z.object({
        reportname: z.string().min(2).max(200, {
            message: "The report name should contain atmost 200 characters"
        }),
        dateToBeTaken: z.date().optional(),
    })),
    other: z.string().min(0).max(255, {
        message: "Only 255 characters are allowed for other field"

    }),
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
            medicine: [{ medicineName: "", dose: "", time: "" }],
            bloodPressure: "",
            weight: "",
            height: "",
            reports: [{ reportname: "", dateToBeTaken: undefined }],
            other: "",
        },
    })

    const { fields: medicine, append: appendMedicine, remove: removeMedicine } = useFieldArray({
        name: "medicine",
        control: form.control,
    })

    const { fields: reports, append, remove } = useFieldArray({
        name: "reports",
        control: form.control,
    })

    const handleAddMedicineClick = () => {
        appendMedicine({ medicineName: "", dose: "", time: "" });
    }

    const handleRemoveMedicineClick = (index: number) => {
        removeMedicine(index);
    }

    const handleAddFieldClick = () => {
        append({ reportname: "", dateToBeTaken: undefined });
    }

    const handleTriggerClick = () => {
        setCurrentDateTime(getCurrentDateTime())
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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

                                {
                                    medicine.map((field, index) => (
                                        <div key={field.id} className='flex flex-col gap-5'>
                                            <FormField
                                                control={form.control}
                                                name={`medicine.${index}.medicineName`}
                                                render={({ field }) => (
                                                    <FormItem className='w-full'>
                                                        <FormLabel className='flex flex-row gap-1 align-middle'>
                                                            <div>Medicine Name</div>
                                                            <button type='button' onClick={handleAddMedicineClick}>
                                                                <CirclePlus className='text-ugray-400' size={16} />
                                                            </button>
                                                            {
                                                                index > 0 && (
                                                                    <button type='button' onClick={() => handleRemoveMedicineClick(index)}>
                                                                        <CircleMinus className='text-ured-400' size={16} />
                                                                    </button>
                                                                )
                                                            }
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />


                                            <div className='flex flex-col md:flex-row justify-between gap-5'>
                                                <FormField
                                                    control={form.control}
                                                    name={`medicine.${index}.dose`}
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
                                                    name={`medicine.${index}.time`}
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
                                        </div>

                                    ))
                                }


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

                                    <FormField
                                        control={form.control}
                                        name="nextChannelDate"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Next Channel Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <UButton
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full border-ugray-100 pl-3 text-left font-normal py-[23px]",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span className='text-ugray-400'>MM/DD/YYYY</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </UButton>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date > new Date() ||
                                                                date < new Date("1900-01-01")
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <div className='flex flex-col md:flex-row justify-between gap-5'>
                                    <FormField
                                        control={form.control}
                                        name="weight"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Weight</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="height"
                                        render={({ field }) => (
                                            <FormItem className='w-72'>
                                                <FormLabel>Height</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col gap-5'>
                                    {reports.map((field, index) => (
                                        <div className='flex flex-col md:flex-row justify-between gap-5' key={field.id}>
                                            <div className='flex flex-col md:flex-row justify-between gap-5'>
                                                <FormField
                                                    control={form.control}
                                                    name={`reports.${index}.reportname`}
                                                    render={({ field }) => (
                                                        <FormItem className='w-72'>
                                                            <FormLabel className='flex flex-row gap-1 align-middle'>
                                                                <div>Report Name</div>
                                                                <button type='button' onClick={handleAddFieldClick}>
                                                                    <CirclePlus className='text-ugray-400' size={16} />
                                                                </button>
                                                                {
                                                                    index > 0 && (
                                                                        <button type="button" onClick={() => remove(index)}>
                                                                            <CircleMinus className='text-ured-400' size={16} />
                                                                        </button>
                                                                    )
                                                                }
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name={`reports.${index}.dateToBeTaken`}
                                                    render={({ field }) => (
                                                        <FormItem className='w-72'>
                                                            <FormLabel className='flex flex-row align-middle'>Date to be Taken</FormLabel>
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <FormControl>
                                                                        <UButton
                                                                            variant={"outline"}
                                                                            className={cn(
                                                                                "w-full border-ugray-100 pl-3 text-left font-normal py-[23px]",
                                                                                !field.value && "text-muted-foreground"
                                                                            )}
                                                                        >
                                                                            {field.value ? (
                                                                                format(field.value, "PPP")
                                                                            ) : (
                                                                                <span className='text-ugray-400'>MM/DD/YYYY</span>
                                                                            )}
                                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                        </UButton>
                                                                    </FormControl>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0" align="start">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={field.value}
                                                                        onSelect={field.onChange}
                                                                        disabled={(date) =>
                                                                            date > new Date() ||
                                                                            date < new Date("1900-01-01")
                                                                        }
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                <FormField
                                    control={form.control}
                                    name="other"
                                    render={({ field }) => (
                                        <FormItem className='w-72'>
                                            <FormLabel>Other</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className='flex w-full justify-end gap-2 md:gap-3'>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit" variant={"default"}>Submit</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    )
}