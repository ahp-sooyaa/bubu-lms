import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Banknote, BellRing, CloudUpload, Lock, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

function EnrollmentForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger className="px-6 py-2.5 bg-primary hover:bg-[#165B48] text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                    Enroll Now
                </DialogTrigger>
                <DialogContent className="overflow-hidden min-w-[600px]">
                    <DialogHeader>
                        <div className="mx-auto sm:mx-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <Banknote size={20} className="text-primary" />
                        </div>
                        <DialogTitle>Complete Enrollment</DialogTitle>
                        <DialogDescription>
                            Please transfer the tuition fee to one of the
                            accounts below and upload your receipt. We will
                            notify you via email once your payment is confirmed.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Email Address</FieldLabel>
                            <InputGroup>
                                <InputGroupInput placeholder="student@example.com" />
                                <InputGroupAddon>
                                    <Mail />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel>Bank</FieldLabel>
                            <RadioGroup
                                defaultValue="kubernetes"
                                className="flex gap-2"
                            >
                                <FieldLabel>
                                    <Field orientation="horizontal">
                                        <FieldContent>
                                            <FieldTitle>Chase Bank</FieldTitle>
                                            <FieldDescription>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Account No:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        1234 5678 9012
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Name:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        LMS Academy Inc.
                                                    </span>
                                                </div>
                                            </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem
                                            value="kubernetes"
                                            id="kubernetes-r2h"
                                        />
                                    </Field>
                                </FieldLabel>
                                <FieldLabel htmlFor="vm-z4k">
                                    <Field orientation="horizontal">
                                        <FieldContent>
                                            <FieldTitle>
                                                Bank Of America
                                            </FieldTitle>
                                            <FieldDescription>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Account No:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        1234 5678 9012
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Name:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        LMS Academy Inc.
                                                    </span>
                                                </div>
                                            </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem
                                            value="vm"
                                            id="vm-z4k"
                                        />
                                    </Field>
                                </FieldLabel>
                            </RadioGroup>
                        </Field>

                        <Field>
                            <FieldLabel>Payment Receipt</FieldLabel>
                            <Input
                                className="sr-only"
                                id="file-upload"
                                type="file"
                            />
                            <div className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-2xl hover:bg-input/30 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
                                <div className="space-y-2 text-center">
                                    <div className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800">
                                        <CloudUpload />
                                    </div>
                                    <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                                        <label
                                            className="relative cursor-pointer rounded-md font-bold text-primary hover:text-primary-light focus-within:outline-none"
                                            htmlFor="file-upload"
                                        >
                                            <span>Upload a file</span>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                        PNG, JPG, PDF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                            )}
                        >
                            Cancel
                        </DialogClose>
                        <Button type="submit">Confirm Transfer</Button>
                    </DialogFooter>
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-2 border-t border-gray-100 dark:border-gray-700 -mx-6 -mb-6">
                        <p className="text-xs text-center sm:text-left text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1.5">
                            <Lock size={15} />
                            Your email is safe with us. No spam.
                        </p>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
}

function WaitlistForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary rounded-full text-sm font-bold transition-all">
                    Join Wait List
                </DialogTrigger>
                <DialogContent className="overflow-hidden">
                    <DialogHeader>
                        <div className="mx-auto sm:mx-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <BellRing size={20} className="text-primary" />
                        </div>
                        <DialogTitle>Join Wait List</DialogTitle>
                        <DialogDescription>
                            Enter your email address to be notified when
                            &#34;Digital Marketing Strategy&#34; becomes
                            available for enrollment.
                        </DialogDescription>
                    </DialogHeader>
                    <InputGroup>
                        <InputGroupInput placeholder="student@example.com" />
                        <InputGroupAddon>
                            <Mail />
                        </InputGroupAddon>
                    </InputGroup>
                    <DialogFooter>
                        <DialogClose
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                            )}
                        >
                            Cancel
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-2 border-t border-gray-100 dark:border-gray-700 -mx-6 -mb-6">
                        <p className="text-xs text-center sm:text-left text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1.5">
                            <Lock size={15} />
                            Your email is safe with us. No spam.
                        </p>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export { EnrollmentForm, WaitlistForm };
