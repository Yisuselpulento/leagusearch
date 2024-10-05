export const Alert = ({ alert }) => {

  return (
    <div class={`${alert.error ? 'dark:text-red-500 text-red-700' : 'dark:bg-green-600 bg-green-500 text-white p-4 text-center'}  p-1 uppercase  text-sm`}>
      <p>{alert.msg}</p>
    </div>

  )
}
