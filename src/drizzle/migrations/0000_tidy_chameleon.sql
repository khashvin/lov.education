CREATE TABLE `courses` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`faculty` integer,
	FOREIGN KEY (`faculty`) REFERENCES `faculties`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `faculties` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`university` integer,
	FOREIGN KEY (`university`) REFERENCES `universities`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `universities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`path` text NOT NULL,
	`description` text NOT NULL,
	`intake` text NOT NULL,
	`location` text NOT NULL,
	`image` text NOT NULL,
	`thumbnail` text NOT NULL,
	`fieldOfStudies` text DEFAULT '[]',
	`enabled` integer DEFAULT true NOT NULL
);
