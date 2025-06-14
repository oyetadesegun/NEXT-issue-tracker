import IssueStatusBadge from "@/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Table, Flex } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import SortByID from "@/components/SortByID";
import Link from "@/components/Link";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany()
  return (
    <div>
      <IssueActions/>
      <Table.Root variant="surface">
        <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            <SortByID>Date Created</SortByID>
            </Table.ColumnHeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
      {issues.map((issue)=>(
        <Table.Row key={issue.id} >
        
    <Table.Cell>
      <Link href={`/issues/${issue.id}`}>
      {issue.title}
      </Link>
      <div className="block md:hidden">
        <IssueStatusBadge status={issue.status}/>
        </div>
    </Table.Cell>
    <Table.Cell className="hidden md:table-cell"><IssueStatusBadge status={issue.status}/></Table.Cell>
    <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
  </Table.Row>)).reverse()}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuePage;
