import IssueStatusBadge from "@/components/IssueStatusBadge"
import prisma from "@/prisma/client"
import { Card, Flex, Heading, Text } from "@radix-ui/themes"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
interface Props{
    params: {id: string}
}

const IssueDetailPage = async ({params:{id}}:Props) => {
     if (typeof parseInt(id) !== 'number') notFound();
   const issue =  await prisma.issue.findUnique({
        where:{id:parseInt(id)}
    })
    if(!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text className="ml-2">{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt='4'>
      <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  )
}

export default IssueDetailPage
