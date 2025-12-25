/**
 * Room Service
 * Handles all API calls related to rooms
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const roomService = {
  /**
   * Fetch all rooms
   * @returns {Promise<Array>} Array of room objects
   */
  async getRooms() {
    const response = await fetch(`${API_BASE_URL}/rooms`);
    if (!response.ok) {
      throw new Error('Failed to fetch rooms');
    }
    return response.json();
  },

  /**
   * Fetch a single room by ID
   * @param {string} id - Room ID
   * @returns {Promise<Object>} Room object
   */
  async getRoomById(id) {
    const response = await fetch(`${API_BASE_URL}/rooms/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch room');
    }
    return response.json();
  },

  /**
   * Create a new room
   * @param {Object} roomData - Room data
   * @returns {Promise<Object>} Created room object
   */
  async createRoom(roomData) {
    const response = await fetch(`${API_BASE_URL}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(roomData),
    });
    if (!response.ok) {
      throw new Error('Failed to create room');
    }
    return response.json();
  },

  /**
   * Update a room
   * @param {string} id - Room ID
   * @param {Object} roomData - Updated room data
   * @returns {Promise<Object>} Updated room object
   */
  async updateRoom(id, roomData) {
    const response = await fetch(`${API_BASE_URL}/rooms/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(roomData),
    });
    if (!response.ok) {
      throw new Error('Failed to update room');
    }
    return response.json();
  },

  /**
   * Delete a room
   * @param {string} id - Room ID
   * @returns {Promise<void>}
   */
  async deleteRoom(id) {
    const response = await fetch(`${API_BASE_URL}/rooms/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete room');
    }
  },
};
