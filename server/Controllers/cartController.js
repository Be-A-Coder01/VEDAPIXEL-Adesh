import User from "../Models/userModel.js";
import Event from "../Models/eventsModel.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, eventData } = req.body;
    console.log(userId, eventData);

    if (!eventData || !eventData.eventId || !eventData.quantity) {
      return res
        .status(400)
        .json({ error: "Event ID and quantity are required" });
    }

    const { eventId, quantity } = eventData;

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingIndex = user.cart.findIndex(
      (item) => item.eventId.toString() === eventId
    );

    if (existingIndex >= 0) {
      user.cart[existingIndex].quantity += quantity;
      user.cart[existingIndex].totalPrice =
        user.cart[existingIndex].quantity * event.price;
    } else {
      user.cart.push({
        eventId: event._id,
        eventName: event.title,
        quantity,
        pricePerUnit: event.price,
        totalPrice: event.price * quantity,
      });
    }

    await user.save();

    res.status(200).json({ message: "Event added to cart", cart: user.cart });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
