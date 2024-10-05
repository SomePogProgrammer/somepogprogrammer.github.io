import Link from 'next/link'
import type {JobRequests as Job_Requests  } from 'server-globals'

type Job_RequestsProps = {
  Job_Requests: Job_Requests
}

export default function JobRequests({ Job_Requests }: Job_RequestsProps) {
  return (
    <li>
      <Link href="/Job_Requests/[id]" as={`/Job_Requests/entry/${Job_Requests._id}`}>
        {Job_Requests._id}
      </Link>
    </li>
  )
}