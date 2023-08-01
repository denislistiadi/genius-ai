import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/logo.png" className="p-1" />
    </Avatar>
  )
}
