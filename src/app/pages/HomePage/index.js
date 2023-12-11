import React, {useState, useRef, useLayoutEffect} from 'react'
import { Typography } from 'antd'
// import { a, useSpring } from '@react-spring/three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useMask, useAnimations, Float, Instance, Instances, MeshTransmissionMaterial, CameraControls } from '@react-three/drei'
import { Lightformer, Environment, RandomizedLight, AccumulativeShadows } from '@react-three/drei'
import Header from '../../../modules/common/Header'



const HomePage = () => {
  const { Title, Text } = Typography
  const [active, setActive] = useState(0)
  const spheres=[
        [1, 'orange', 0.05, [-4, -1, -1]],
        [0.75, 'hotpink', 0.1, [-4, 2, -2]],
        [1.25, 'aquamarine', 0.2, [4, -3, 2]],
        [1.5, 'lightblue', 0.3, [-4, -2, -3]],
        [2, 'pink', 0.3, [-4, 2, -4]],
        [2, 'skyblue', 0.3, [-4, 2, -4]],
        [1.5, 'orange', 0.05, [-4, -1, -1]],
        [2, 'hotpink', 0.1, [-4, 2, -2]],
        [1.5, 'aquamarine', 0.2, [4, -3, 2]],
        [1.25, 'lightblue', 0.3, [-4, -2, -3]],
        [1, 'pink', 0.3, [-4, 2, -4]],
        [1, 'skyblue', 0.3, [-4, 2, -4]]
      ]

  return (
    <>
    <Header/>
    <div style={{position: "fixed",paddingLeft: 100, backgroundColor: "rgba(0;0;0;0)", paddingRight: 100, paddingTop: 10, zIndex: 900, top: 62, width: "100%"}}>
      <Title style={{color: "#133A37", fontSize: "70px", marginBottom: -30}} >Together we have planted</Title>
      <Title style={{color: "#133A37", fontSize: "40px"}}>700,400,200 Trees</Title>
    </div>
    
    <div style={{position: "relative", width: "100%", height: "100%", overflow: "hidden"}}>
    <Canvas style={{display: "block"}} shadows camera={{ position: [30, 0, -3], fov: 35, near: 1, far: 50 }}>
      <color attach="background" args={['#F1F2EE']} />

      {/** Glass aquarium */}
      <Aquarium scale={[1, 0.9, 1]} position={[0, -1, 0]}>
        <Float rotationIntensity={2} floatIntensity={10} speed={2}>
          <Model scale={[1.5, 1.5, 1.5]} position={[1, 1, 0.5]}/>
        </Float>
        <Float position={[0, 0, 4]} rotationIntensity={3} floatIntensity={10} speed={2} floatingRange={[0.2, -0.2]}>
          <Model scale={[0.9, 0.9, 0.9]} position={[1, 1, 0.5]}/>
          
        </Float>
        <Float position={[-3, 0, 2]} rotationIntensity={2} floatIntensity={4} speed={2}>
          <Model position={[1, -4, 0.5]}/>
        </Float>
        <Float position={[0, 0, -4]} rotationIntensity={3} floatIntensity={10} speed={2} floatingRange={[-0.4, 0]}>
          <Model position={[1, 0, 0.5]}/>
        </Float>
        <Float position={[-4, -2, -4]} rotationIntensity={2} floatIntensity={4} speed={2} floatingRange={[0, 0.4]}>
          <Model scale={[0.9, 0.9, 0.9]}position={[1, -2, 0.5]}/>
        </Float>
        <Instances renderOrder={-1000}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial depthTest={false} />
          {spheres.map(([scale, color, speed, position], index) => (
            <Sphere key={index} scale={scale} color={color} speed={speed} position={position} />
          ))}
        </Instances>
      </Aquarium>
      {/** Soft shadows */}
      <AccumulativeShadows temporal frames={100} color="#AAFF00" colorBlend={2} opacity={0.9} scale={60} position={[0, -6, 0]}>
        <RandomizedLight amount={8} radius={15} ambient={0.5} intensity={1} position={[-5, 10, -5]} size={20} />
      </AccumulativeShadows>
      {/** Custom environment map */}
      <Environment resolution={1024}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      </Environment>
      <CameraControls truckSpeed={0} dollySpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </Canvas>
    </div>
    </>
  )
}

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Aquarium({ children, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/shapes-transformed.glb')
  const stencil = useMask(1, false)
  useLayoutEffect(() => {
    // Apply stencil to all contents
    ref.current.traverse((child) => child.material && Object.assign(child.material, { ...stencil }))
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh castShadow scale={[0.61 * 6, 0.8 * 6, 1 * 6]} geometry={nodes.Cube.geometry}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={3}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
      </mesh>
      <group ref={ref}>{children}</group>
    </group>
  )
}

function Sphere({ position, scale = 1, speed = 0.1, color = 'white' }) {
  return (
    <Float rotationIntensity={40} floatIntensity={20} speed={speed / 2}>
      <Instance position={position} scale={scale} color={color} />
    </Float>
  )
}

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/model-transformed.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Material2.geometry} material={materials.Groundcover_Wood_Mix} rotation={[-Math.PI / 2, 0, 0]} />
//       <mesh geometry={nodes.Material2_1.geometry} material={materials.grass} rotation={[-Math.PI / 2, 0, 0]} />
//       <mesh geometry={nodes.Material2_2.geometry} material={materials.sugar_maple_bark} position={[0.895, 90.501, -0.606]} rotation={[-2.288, -0.89, 2.785]} />
//       <instancedMesh args={[nodes.Material2_3.geometry, materials.sugar_maple_leaf, 1622]} instanceMatrix={nodes.Material2_3.instanceMatrix} />
//     </group>
//   )
// }

// useGLTF.preload('/model-transformed.glb')
export function Model(props) {
  const { nodes, materials } = useGLTF('/mld-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tree_0_Tree_0Mat_0.geometry} material={materials.Tree_0Mat} scale={0.01} />
      <mesh geometry={nodes.Tree_1_Tree_1Mat_0.geometry} material={materials.Tree_1Mat} scale={0.01} />
    </group>
  )
}
useGLTF.preload('/mld-transformed.glb')

export default HomePage
