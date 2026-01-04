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
import { Banknote, BellRing, Lock, Mail } from "lucide-react";
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
import { createPaymentReceipt } from "@/actions/payment-receipt-action";
import { waitListAction } from "@/actions/wait-list-action";

function EnrollmentForm() {
    const paymentAmount = 499;
    const createPaymentReceiptAction = createPaymentReceipt.bind(
        null,
        paymentAmount,
    );

    return (
        <Dialog>
            <DialogTrigger className="px-6 py-2.5 bg-primary hover:bg-[#165B48] text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                Enroll Now
            </DialogTrigger>
            <DialogContent className="overflow-hidden min-w-[600px]">
                <form
                    action={createPaymentReceiptAction}
                    className="grid gap-6"
                >
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
                                <InputGroupInput
                                    name="email"
                                    placeholder="student@example.com"
                                />
                                <InputGroupAddon>
                                    <Mail />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel>Bank</FieldLabel>
                            <RadioGroup
                                defaultValue="chase-bank"
                                className="flex gap-2"
                                name="bank"
                            >
                                <FieldLabel htmlFor="chase-bank">
                                    <Field orientation="horizontal">
                                        <FieldContent>
                                            <FieldTitle>Chase Bank</FieldTitle>
                                            <FieldDescription>
                                                <span className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Account No:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        1234 5678 9012
                                                    </span>
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Name:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        LMS Academy Inc.
                                                    </span>
                                                </span>
                                            </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem
                                            value="chase-bank"
                                            id="chase-bank"
                                        />
                                    </Field>
                                </FieldLabel>
                                <FieldLabel htmlFor="bank-of-america">
                                    <Field orientation="horizontal">
                                        <FieldContent>
                                            <FieldTitle>
                                                Bank Of America
                                            </FieldTitle>
                                            <FieldDescription>
                                                <span className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Account No:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        1234 5678 9012
                                                    </span>
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                        Name:
                                                    </span>
                                                    <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 select-all">
                                                        LMS Academy Inc.
                                                    </span>
                                                </span>
                                            </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem
                                            value="bank-of-america"
                                            id="bank-of-america"
                                        />
                                    </Field>
                                </FieldLabel>
                            </RadioGroup>
                        </Field>

                        <Field>
                            <FieldLabel>Payment Receipt</FieldLabel>
                            <Input id="receipt" type="file" name="receipt" />
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
                </form>
            </DialogContent>
        </Dialog>
    );
}

function WaitlistForm() {
    return (
        <Dialog>
            <DialogTrigger className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary rounded-full text-sm font-bold transition-all">
                Join Wait List
            </DialogTrigger>
            <DialogContent className="overflow-hidden">
                <form action={waitListAction} className="grid gap-6">
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
                    <Field>
                        <InputGroup>
                            <InputGroupInput
                                name="email"
                                placeholder="student@example.com"
                            />
                            <InputGroupAddon>
                                <Mail />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
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
                </form>
            </DialogContent>
        </Dialog>
    );
}

export { EnrollmentForm, WaitlistForm };
