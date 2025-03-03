-- CreateTable
CREATE TABLE "Employee" (
    "employeeId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "task" (
    "taskId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "checkInTime" DATETIME NOT NULL,
    "checkOutTime" DATETIME NOT NULL,
    "employeeId" INTEGER NOT NULL,
    CONSTRAINT "task_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE
);
