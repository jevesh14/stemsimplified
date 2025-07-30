import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import db from "@/lib/firebase";

export const useViewCounter = (articleId: string) => {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to increment view count
  const incrementView = async () => {
    try {
      const docRef = doc(db, "views", articleId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, { count: increment(1) });
      } else {
        await setDoc(docRef, { count: 1 });
      }
    } catch (error) {
      console.error("Error incrementing view:", error);
    }
  };

  // Function to fetch current view count
  const fetchViews = async () => {
    try {
      const docRef = doc(db, "views", articleId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setViews(docSnap.data().count);
      } else {
        setViews(0);
      }
    } catch (error) {
      console.error("Error fetching views:", error);
      setViews(0);
    } finally {
      setLoading(false);
    }
  };

  // Increment view on component mount
  useEffect(() => {
    incrementView();
  }, [articleId]);

  // Fetch current view count
  useEffect(() => {
    fetchViews();
  }, [articleId]);

  return { views, loading };
}; 