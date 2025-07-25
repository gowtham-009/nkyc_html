function encryptiondata(data) {
  return data
}

const baseurl='https://nnkyc.w3webtechnologies.co.in/api/v1/'
const headers='C58EC6E7053B95AEF7428D9C7A5DB2D892EBE2D746F81C0452F66C8920CDB3B1'



async function serverdata(){
  const apiurl=baseurl+'nkyc_data'
   const userkey = localStorage.getItem('userkey') 
  const user = encryptiondata({
                 userToken: userkey,
            });

  const payload = { payload: user };
  const jsonString = JSON.stringify(payload);

   try {
    const response = await fetch(apiurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'C58EC6E7053B95AEF7428D9C7A5DB2D892EBE2D746F81C0452F66C8920CDB3B1',
      },
      body: jsonString,
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    const decryptedData = await data;
    console.log("Decrypted Datankyc:", decryptedData);
    return decryptedData
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }

}

