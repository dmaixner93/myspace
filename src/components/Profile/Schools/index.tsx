export default function Schools() {
  return (
    <section className="schools">
      <table className="sidebar-table w-full">
        <caption>
          <h2 className="sidebar-table-h2">Tom's Schools</h2>
        </caption>

        <tbody>
          <tr>
            <th className="sidebar-table-header" scope="row">
              <ul>
                <li>
                  <a href="#">University Of California-Los Angeles</a>
                </li>
                <li>Los Angeles, CALIFORNIA</li>
                <li>
                  Graduated: <a href="#">2000</a>
                </li>
                <li>Degree: Master's Degree</li>
                <li>Major: Film - Critical Studies</li>
              </ul>
            </th>
            <td className="sidebar-table-data w-16 grow-0">1999 to 2000</td>
          </tr>

          <tr>
            <th className="sidebar-table-header" scope="row">
              <ul>
                <li>
                  <a href="#">University Of California-Berkeley</a>
                </li>
                <li>Berkeley, CALIFORNIA</li>
                <li>
                  Graduated: <a href="#">1997</a>
                </li>
                <li>Student status: Alumni</li>
                <li>Degree: Bachelor's Degree</li>
                <li>Major: English & Rhetoric</li>
                <li>Clubs: DECAL: Literary Theory</li>
              </ul>
            </th>
            <td className="sidebar-table-data w-16 grow-0">1993 to 1996</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
