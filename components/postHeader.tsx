import DateFormatter from "./dateFormatter"

type Props = {
  title: string
  date: string
}

export default function PostHeader ({ title, date }: Props) {
  return (
    <>
      <h1 className="font-black text-5xl lg:text-7xl lg:text-center mt-8">{title}</h1>
      <div className="text-xl lg:text-center mt-4 mb-10">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}