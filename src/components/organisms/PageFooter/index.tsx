import React from 'react'

import LogoIcon from '../../atoms/Icon/Logo'

const PageFooter: React.FC = () => (
  <>
    <div>
      <div className="min-h-[9px] bg-linear-gradient-primary"></div>
      <div className="bg-grey-300 min-h-[113px] flex items-center justify-center ">
        <div className="max-w-[80%] py-4 flex items-center justify-center">
          <LogoIcon />
          <p className="m-4 font-exo text-2xl font-semibold leading-8 tracking-wide text-center text-grey-500 whitespace-nowrap">
            Brand Name
          </p>
          <p className="ml-5 font-inter text-xs font-normal leading-4 tracking-wide text-left text-grey-400">
            © 2024
            <span className="font-bold"> Brand Name </span>
            All rights reserved. Unauthorized use or copying of this brand is
            strictly prohibited. No part of this website may be reproduced,
            distributed, or transmitted in any form or by any means, including
            photocopying, recording, or other electronic or mechanical methods,
            without the prior written permission of
            <span className="font-bold"> Brand Name</span>, except in the case
            of brief quotations embodied in critical reviews and certain other
            non-commercial uses permitted by copyright law.
          </p>
        </div>
      </div>
    </div>
  </>
)
export default PageFooter
