import React from 'react'
import Footer from '../Footer'
import Header from '../Header';
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function Exams() {
  return (<>
    <Header />
    <section className='gdpi exam'>
      <div className='hero-banner'>
        <div className="container">
          <div className='text-content'>
            <h1 className='main-heading'>Exam Details</h1>
          </div>
        </div>
      </div>
    </section>
    <section className='exam-content py-4'>
      <div className="container">
        <h2 className='main-heading text-start'>Exam name</h2>
        <TableContainer style={{ border: "1px solid gray" }} className="bg-light">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#2f2f7c" }}>S.No.</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Exam Name</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Conducting Body</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Participating Institutes </TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Issue of Form</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Last Date of Submission</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Examination Date</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Information Webpage</TableCell>
                <TableCell style={{ color: "#2f2f7c" }}>Application Form Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>1</TableCell>
                <TableCell>JEE Main</TableCell>
                <TableCell>National Testing Agency (NTA)*</TableCell>
                <TableCell>IIT, NIT </TableCell>
                <TableCell>2nd week of December 2021</TableCell>
                <TableCell>01/01/2022</TableCell>
                <TableCell>4 Times (February, March, April and May)</TableCell>
                <TableCell>https://jeemain.nta.nic.in/</TableCell>
                <TableCell>1. RS. 650 FOR MALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 2. RS. 325 FOR FEMALE CANDIDATES OF UNRESERVED/OBC CATEGORY, 3. RS. 325 FOR SC/ST/PWD/TRANSGENDER CATEGORY CANDIDATES</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </section>
    <Footer />
  </>
  )
}

export default Exams