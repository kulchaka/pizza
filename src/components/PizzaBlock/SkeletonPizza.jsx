import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonPizza = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='3' y='262' rx='10' ry='10' width='280' height='30' />
    <rect x='3' y='315' rx='10' ry='10' width='280' height='88' />
    <rect x='19' y='417' rx='10' ry='10' width='74' height='38' />
    <circle cx='140' cy='125' r='125' />
    <rect x='167' y='411' rx='20' ry='20' width='108' height='45' />
  </ContentLoader>
)

export default SkeletonPizza
