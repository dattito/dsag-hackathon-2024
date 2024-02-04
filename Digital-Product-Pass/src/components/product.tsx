export default function Product() {
  return (
    <div className="relative">
      <img src="/bottle.png" className="max-h-[400px]" />
      <div className="flex flex-col items-center mt-4 absolute bottom-[-9rem] left-1/2 -translate-x-1/2">
        <table className="mx-8">
          <tr>
            <td className="pr-10">
              <div className="flex items-center">
                <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                  tag
                </span>
                Seriennummer
              </div>
            </td>
            <td className="font-bold">342379922</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center">
                <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                  palette
                </span>
                Farbe
              </div>
            </td>
            <td className="font-bold">Blau</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
