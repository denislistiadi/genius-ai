import { UserButton } from "@clerk/nextjs"

export default function DashboardPage() {
  return (
    <div className="flex gap-5">
      DashboardPage <UserButton afterSignOutUrl="/" />
    </div>
  )
}
