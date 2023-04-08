const PopupWindow = () => {
 return (
   <div id="popup-window">
     <h1>Make reading immersive and practical!</h1>
     <button id="startAnalysis">Analyze</button>
     <div id="formatting-options">
       <p>Select your formatting options:</p>
       <div className="option">
         <label>
           <input type="radio" name="formatting-option" value="highlight" /> Highlight
         </label>
         <input type="color" className="formatting-color" data-formatting-option="highlight" />
       </div>
       <div className="option">
         <label>
           <input type="radio" name="formatting-option" value="underline" /> Underline
         </label>
         <input type="color" className="formatting-color" data-formatting-option="underline" />
       </div>
       <div className="option">
         <label>
           <input type="radio" name="formatting-option" value="bold" /> Bold
         </label>
         <input type="color" className="formatting-color" data-formatting-option="bold" />
       </div>
     </div>
   </div>
 );
};


ReactDOM.render(<PopupWindow />, document.getElementById('root'));


