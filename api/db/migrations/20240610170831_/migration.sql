/*
  Warnings:

  - You are about to drop the column `slug` on the `Room` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "otp" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "author_id" TEXT,
    CONSTRAINT "Room_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("author_id", "id", "meta", "otp", "title") SELECT "author_id", "id", "meta", "otp", "title" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");
CREATE UNIQUE INDEX "Room_otp_key" ON "Room"("otp");
PRAGMA foreign_key_check("Room");
PRAGMA foreign_keys=ON;
