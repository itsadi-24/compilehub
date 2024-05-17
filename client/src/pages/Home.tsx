export default function Home() {
  return (
    <div className='w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-3'>
      <h1 className='text-2xl font-bold text-center md:text-6xl'>
        WD Compiler
      </h1>
      <p className='text-center text-gray-500 '>
        Compiler HTML, CSS, JavaScript Code on the go and share it with your
        friends
      </p>
    </div>
  );
}
