// export const dynamic = "force-dynamic";
export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error("Something went error")
  return <div className="h-screen flex items-center justify-center ">About Page</div>;
}
