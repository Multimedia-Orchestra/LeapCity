using UnityEngine;
using System.Collections;
using System;
using System.Threading;
using Leap;

public class LeapBehavior : MonoBehaviour {
    Controller controller;

    void Start ()
    {
        controller = new Controller();
    }

    void Update ()
    {
		// Create Frame
        Frame frame = controller.Frame();
		
		if (!frame.Hands.Empty)
		{
    		// Get the first hand
    		Hand hand = frame.Hands[0];
			
			// Check if the hand has any fingers
			FingerList fingers = hand.Fingers;
			if (!fingers.Empty)
			{
    			// Calculate the hand's average finger tip position
    			Vector avgPos = Vector.Zero;
    			foreach (Finger finger in fingers)
    			{
        			avgPos += finger.TipPosition;
    			}
    			avgPos /= fingers.Count;

    			// transform.position =  Vector3(avgPos.x,avgPos.y,avgPos.z);
				transform.position =  new Vector3(avgPos.x/50,avgPos.z/50,avgPos.y/50-5);
			}
		}
	}
}