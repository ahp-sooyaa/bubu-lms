CREATE TYPE "public"."application_status" AS ENUM('submitted', 'waitlisted', 'accepted', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."class_status" AS ENUM('upcoming', 'ongoing', 'completed', 'canceled');--> statement-breakpoint
CREATE TYPE "public"."payment_status" AS ENUM('pending', 'verified', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('student', 'teacher', 'admin');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('active', 'suspended', 'archived');--> statement-breakpoint
CREATE TABLE "class_application" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_application_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"class_id" integer,
	"user_id" integer,
	"email" text NOT NULL,
	"status" "application_status" DEFAULT 'submitted' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "class" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "class_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"teacher_id" integer,
	"capacity" integer NOT NULL,
	"type" text NOT NULL,
	"live_session_url" text,
	"start_time" text NOT NULL,
	"duration_minutes" text NOT NULL,
	"start_date" text NOT NULL,
	"end_date" text NOT NULL,
	"status" "class_status" DEFAULT 'upcoming' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "payment_receipt" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "payment_receipt_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"application_id" integer,
	"email" text NOT NULL,
	"receipt_url" text NOT NULL,
	"bank" text NOT NULL,
	"amount" integer NOT NULL,
	"status" "payment_status" DEFAULT 'pending' NOT NULL,
	"reviewed_by" integer,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"clerk_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"role" "role" DEFAULT 'student' NOT NULL,
	"status" "status" DEFAULT 'active' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "user_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "class_application" ADD CONSTRAINT "class_application_class_id_class_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_application" ADD CONSTRAINT "class_application_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class" ADD CONSTRAINT "class_teacher_id_user_id_fk" FOREIGN KEY ("teacher_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_receipt" ADD CONSTRAINT "payment_receipt_application_id_class_application_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."class_application"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_receipt" ADD CONSTRAINT "payment_receipt_reviewed_by_user_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;