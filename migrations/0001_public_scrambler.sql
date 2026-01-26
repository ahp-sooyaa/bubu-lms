CREATE TYPE "public"."enrollment_status" AS ENUM('active', 'completed', 'dropped');--> statement-breakpoint
CREATE TABLE "enrollment" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "enrollment_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"class_id" integer,
	"user_id" integer,
	"status" "enrollment_status" DEFAULT 'active' NOT NULL,
	"enrolled_at" text NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_class_id_class_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;