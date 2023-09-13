import React from 'react';
import { useEffect } from 'react';
export default function IndexPage() {
  const Barcode = "1234"
  useEffect(() => {
    console.log('heyyaaa');
    try{
    if (window.Barcode && window.Barcode.postMessage) {
      Barcode.postMessage("hello bro hi");
   }
  } catch(e){

  }
  });
  return <div>Hello World.</div>;
}