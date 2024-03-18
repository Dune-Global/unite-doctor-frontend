export default function Layout({
  children,
  appoinmentsApprove,
  appoinmentsList,
  gender,
  age,
  summery,
  welcome,
}: {
  children: React.ReactNode;
  appoinmentsApprove: React.ReactNode;
  appoinmentsList: React.ReactNode;
  gender: React.ReactNode;
  age: React.ReactNode;
  summery: React.ReactNode;
  welcome: React.ReactNode;
}) {
  return (
    <>
      {children}
      {welcome}
      {summery}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {appoinmentsApprove}
        <div className="grid grid-rows-2">
          {age}
          {gender}
        </div>
        {appoinmentsList}
      </div>
    </>
  );
}
