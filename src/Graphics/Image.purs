module Graphics.Phaser.Image where

import Effect (Effect)
import Phaser.Graphics.ForeignTypes (PhaserImage, PhaserScene)


-- | Create a new image in the given scene
foreign import create :: String-> {x::Number,y:: Number} -> PhaserScene -> Effect PhaserImage

foreign import getScene :: PhaserImage -> PhaserScene
