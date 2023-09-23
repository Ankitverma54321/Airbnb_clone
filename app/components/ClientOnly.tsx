'use client';

import   { Children,useEffect, useState } from 'react'

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

    const [hasMounted, setHasMOunted]=useState(false);

    useEffect(() =>{
         setHasMOunted(true);
    },[])
    if(!hasMounted){
        return null;
    }

  return (
    <>
    {Children}
    </>
  );
}

export default ClientOnly