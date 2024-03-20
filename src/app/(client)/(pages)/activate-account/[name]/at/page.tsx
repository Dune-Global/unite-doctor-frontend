export default function ActivationToken({
  params,
}: {
  params: { at: string };
}) {
  return (
    <div>
      <h1>{params.at}</h1>
    </div>
  );
}
