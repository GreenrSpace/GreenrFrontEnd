import React, { useState } from 'react'
import Link from "next/link";

import Hero from "components/Content/Hero"


import Layout from "components/Layout/Layout.js";

export default function Home() {

  return (
    <div>

    <Layout title = "Greenr Space">
    <Hero testingphase="Words, everywhere" image = "/static/example_photos/silveryanne.JPG" subtitle="a subtitle bish"/>
          
    </Layout>
    </div>

  );
}
