module Graphics.Phaser.Scene where

-- TODO: add scene.data, and support for scene.data events
-- Use this as example to refactor to Fn2, Fn3 
-- https://github.com/purescript-web/purescript-canvas/blob/master/src/Graphics/Canvas.purs#L167
import Prelude
import Data.Function.Uncurried (Fn2, Fn3, runFn2, runFn3)
import Effect (Effect)
import Graphics.Phaser.GameObject (PhaserGameObject)

foreign import data PhaserScene :: Type

foreign import data SceneManager :: Type

-- Current time in milliseconds
type Time
  = Number

-- Milliseconds since the last frame
type Delta
  = Number

-- Accepting the key last allows using the same config object to multiple
-- instances with different keys
type SceneConfig a
  = { create :: PhaserScene -> a -> Effect Unit
    , init :: PhaserScene -> a -> Effect Unit
    , update :: PhaserScene -> Effect Unit
    , preload :: PhaserScene -> Effect Unit
    , data :: a
    } 

data Scene a
  = Scene (SceneConfig a) PhaserScene

foreign import createImpl :: forall a. Fn2 (SceneConfig a) String (Effect PhaserScene)

create :: forall a. SceneConfig a -> String -> Effect (Scene a)
create cfg key = do
  scn <- runFn2 createImpl cfg key
  pure $ Scene cfg scn

getPhaserScene :: forall a. Scene a -> PhaserScene
getPhaserScene (Scene cfg scn) = scn

foreign import addSceneImpl :: Fn3 SceneManager String PhaserScene (Effect Unit)

-- | Registers a new scene with a given key. The scene is not started by default.
addScene :: SceneManager -> String -> PhaserScene -> Effect Unit
addScene = runFn3 addSceneImpl

foreign import getByKeyImpl :: Fn2 SceneManager String (Effect PhaserScene)

foreign import remove :: PhaserScene -> (Effect Unit)

foreign import launchImpl :: forall a. Fn2 PhaserScene a (Effect Unit)

foreign import startImpl :: forall a. Fn2 a PhaserScene (Effect Unit)

foreign import restartImpl :: forall a. Fn2 PhaserScene a (Effect Unit)

foreign import pause :: PhaserScene -> (Effect Unit)

foreign import resume :: PhaserScene -> (Effect Unit)

foreign import sleep :: PhaserScene -> (Effect Unit)

foreign import wake :: PhaserScene -> (Effect Unit)

foreign import switch :: PhaserScene -> (Effect Unit)

foreign import run :: PhaserScene -> (Effect Unit)

foreign import stop :: PhaserScene -> (Effect Unit)

foreign import setVisible :: PhaserScene -> (Effect Unit)

foreign import sendToBack :: PhaserScene -> (Effect Unit)

foreign import bringToTop :: PhaserScene -> (Effect Unit)

-- Comprehensive event list
-- https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/
foreign import setEvent_ :: String -> (Unit -> Effect Unit) -> Effect Unit

foreign import setTimedEvent :: String -> (Time -> Delta -> Effect Unit) -> Effect Unit

foreign import setGameObjectEvent :: String -> (PhaserGameObject -> PhaserScene -> Effect Unit) -> Effect Unit

getByKey :: SceneManager -> String -> Effect PhaserScene
getByKey manager key = runFn2 getByKeyImpl manager key

-- | Starts the given scene in parallel with the current one
launch :: forall a. PhaserScene -> a -> Effect Unit
launch scene a = runFn2 launchImpl scene a

start :: forall a. a -> PhaserScene -> Effect Unit
start = runFn2 startImpl

restart :: forall a. PhaserScene -> a -> Effect Unit
restart scene a = runFn2 restartImpl scene a

-- TODO: return an EventEmitter
setEvent :: Partial => SceneEvent -> Effect Unit
setEvent event = case event of
  Start fn -> setEvent_ "start" fn
  PreUpdate fn -> setTimedEvent "preupdate" fn
  Update fn -> setTimedEvent "update" fn
  PostUpdate fn -> setTimedEvent "postupdate" fn
  Render fn -> setEvent_ "render" fn
  Pause fn -> setEvent_ "pause" fn
  Resume fn -> setEvent_ "resume" fn
  Sleep fn -> setEvent_ "sleep" fn
  Wake fn -> setEvent_ "wake" fn
  Destroy fn -> setEvent_ "destroy" fn
  Resize fn -> setEvent_ "resize" fn
  Boot fn -> setEvent_ "boot" fn
  AddedToScene fn -> setGameObjectEvent "addedtoscene" fn
  RemovedFromScene fn -> setGameObjectEvent "removedfromscene" fn

data SceneEvent
  = Start (Unit -> Effect Unit)
  -- Every tick
  | PreUpdate (Time -> Delta -> Effect Unit)
  | Update (Time -> Delta -> Effect Unit)
  | PostUpdate (Time -> Delta -> Effect Unit)
  | Render (Unit -> Effect Unit)
  -- State changed
  | Pause (Unit -> Effect Unit)
  | Resume (Unit -> Effect Unit)
  | Sleep (Unit -> Effect Unit)
  | Wake (Unit -> Effect Unit)
  | ShutDown (Unit -> Effect Unit)
  -- Other events
  | Destroy (Unit -> Effect Unit)
  | Resize (Unit -> Effect Unit)
  | Boot (Unit -> Effect Unit)
  -- Game Object added to scene
  | AddedToScene (PhaserGameObject -> PhaserScene -> Effect Unit)
  | RemovedFromScene (PhaserGameObject -> PhaserScene -> Effect Unit)
