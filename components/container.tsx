type Props = {
  children?: React.ReactNode
}

export default function Container({children}: Props) {
  return <div className="container mx-auto px-6 mt-6">
    {children}
  </div>
}