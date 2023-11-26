import { Button } from "@radix-ui/themes";
import Pagination from "./components/Pagination";
import LastestIssues from "./LastestIssues";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <>
      {/* <LastestIssues /> */}
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
    </>
  );
}
