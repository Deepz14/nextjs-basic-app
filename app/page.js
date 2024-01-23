import Image from "next/image";

export default function Home() {
  return (
    <section className="m-3">
        <div className="header-section p-1">
            <h3 className="font-bold">User List</h3>
        </div>

        <div className="table-section w-full mt-3">
            <table className="w-full">
                <thead className="p-5">
                    <tr className="">
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>jane.doe@example.com</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>jane.doe@example.com</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>jane.doe@example.com</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>jane.doe@example.com</td>
                        <td>john.doe@example.com</td>
                        <td>john.doe@example.com</td>
                    </tr>
                </tbody>
            </table>
            <div className="table-footer border border-gray-300 text-right text-sm">
                <button className="text-blue-500 px-3 ">◀</button>
                <button>1 - 16</button>
                <button className="text-blue-500 px-3">▶</button>
            </div>
        </div>
    </section>
  );
}
