import React, { useEffect, useState } from 'react';
import Operator_ijo from '../Assets/Operator_ijo.png'
import Operator from '../Assets/Operator.png'
import Deposit_ijo from '../Assets/Deposit_ijo.png'
import Deposit from '../Assets/Deposit.png'
import { db } from '../firebase-config';
import { useLocation } from 'react-router-dom';
import { updateDoc, deleteDoc, doc } from '@firebase/firestore';

const Usrs = () => {
  const [newName, setNewName] = useState('');
  // const [newKategori, setNewKategori] = useState('mobil');
  const [newMerk, setNewMerk] = useState('');
  const [newTipe, setNewTipe] = useState('');
  const [newLokasi, setNewLokasi] = useState('');
  const [newHarga, setNewHarga] = useState(0);
  const [newOperator, setNewOperator] = useState('Tidak');
  const [newDeposit, setNewDeposit] = useState('Tidak');
  const [newKondisi, setNewKondisi] = useState('');
  const [newDeskripsi, setNewDeskripsi] = useState('');

  // PENTING!!   
  // const location = useLocation();
  // let isLogged = location.state ? location.state.isLogged : ''
  // let prodid = location.state ? location.state.prodid : ''
  // let prodKat = location.state ? location.state.prodKat : ''
  let prodKat = 'mobil'
  let prodid = 'F7XxLp3iVpXIDaqIMt2H'

  const updateProduk = async (id) => {
    const prodDoc = doc(db, prodKat, id)
    const newFields = {name: newName, merk: newMerk, tipe: newTipe, lokasi: newLokasi, harga: newHarga, operator: newOperator, deposit: newDeposit, kondisi: newKondisi, deskripsi: newDeskripsi}
    await updateDoc(prodDoc, newFields)
    // console.log(docRef.id)
  }

  const deleteProduk = async (id) => {
    const prodDoc = doc(db, prodKat, id)
    await deleteDoc(prodDoc)
  }


  return (
    <>
    <div className="mx-auto container my-28">
      <div className='mx-auto container border rounded-xl border-blue-700 grid gap-y-4'>
        <div className='text-2xl font-nunito font-black mt-6 text-blue-700'>
          EDIT PRODUK
        </div>
        <div className='mt-16'>
          <div className=' font-nunito font-bold text-lg'>
            Nama Barang
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Masukkan nama barang" onChange={(event) => {
              setNewName(event.target.value)
            }}/>
        </div>
        {/* <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Kategori
          </div>
          <select className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center" 
            value={newKategori} onChange={(event) => {
            setNewKategori(event.target.value)
            console.log(newKategori)
          }}>
            <option value="mobil">Mobil</option>
            <option value="alat_musik">Alat Musik</option>
            <option value="motor">Motor</option>
            <option value="konsol">Konsol</option>
          </select>
        </div> */}
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Merk
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Masukkan merk" onChange={(event) => {
              setNewMerk(event.target.value);
            } } />
        </div>
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Tipe Barang
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Masukkan tipe barang" onChange={(event) => {
              setNewTipe(event.target.value);
            } } />
        </div>
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Lokasi
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Tuliskan lokasi" onChange={(event) => {
              setNewLokasi(event.target.value);
            } } />
        </div>
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Harga Barang/hari
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Rp 0" onChange={(event) => {
              setNewHarga(event.target.value);
            } } />
        </div>
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Keamanan Barang
          </div>
          <div className='flex space-x-8'>
            {newDeposit === 'Tidak' ? <button className="text-xl mt-4 pb-1.5"
            onClick={(event) => {
              setNewDeposit('Ya')}}>
              <img src={Deposit} alt="" />
            </button> : <button className="text-xl mt-4 pb-1.5"
                        onClick={(event) => {
                          setNewDeposit('Tidak')}}>
                          <img src={Deposit_ijo} alt="" />
                        </button>}
            {newOperator === 'Tidak' ? <button className="text-xl mt-4 pb-1.5"
            onClick={(event) => {
              setNewOperator('Ya')}}>
              <img src={Operator} alt="" />
            </button> : <button className="text-xl mt-4 pb-1.5"
                        onClick={(event) => {
                          setNewOperator('Tidak')}}>
                          <img src={Operator_ijo} alt="" />
                        </button>}
          </div>
        </div>
        <div className=''>
          <div className=' font-nunito font-bold text-lg'>
            Deskripsi Barang
          </div>
          <textarea className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 h-48 w-full space-x-6 flex items-center "
            placeholder="Deskripsikan spesifikasi barang selengkap mungkin" onChange={(event) => {
              setNewDeskripsi(event.target.value);
            } }></textarea>
        </div>
        <div className='mb-12'>
          <div className=' font-nunito font-bold text-lg'>
            Kondisi Barang
          </div>
          <input className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
            placeholder="Contoh: ada sedikit lecet, agak macet, dsb." onChange={(event) => {
              setNewKondisi(event.target.value);
            } } />
        </div>
        <div className="flex justify-between w-full mb-12">
          <button type='submit' className="rounded-full bg-gradient-to-r from-red-900 via-red-700 to-red-600 h-12 w-48 text-xl font-bold text-white font-nunito"
              onClick={() => {
                deleteProduk(prodid);
              }}>
            Hapus Produk
          </button>
          <button type='submit' className="rounded-full bg-gradient-to-r from-birdong via-birmid to-birmud h-12 w-48 text-xl font-bold text-white font-nunito"
            onClick={() => {
              updateProduk(prodid)
            }}> 
            Kirim
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Usrs;