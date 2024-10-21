ALTER TABLE "profiles" ALTER COLUMN "wallet_address" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "username" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "profile_category" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "give_or_receive" SET DATA TYPE varchar(10);