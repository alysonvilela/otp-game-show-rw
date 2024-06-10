/*
  Warnings:

  - Added the required column `otp` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "author_id" TEXT,
    CONSTRAINT "Room_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("author_id", "id", "meta", "title") SELECT "author_id", "id", "meta", "title" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");
CREATE UNIQUE INDEX "Room_slug_key" ON "Room"("slug");
CREATE UNIQUE INDEX "Room_otp_key" ON "Room"("otp");
PRAGMA foreign_key_check("Room");
PRAGMA foreign_keys=ON;
