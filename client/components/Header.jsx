import React from 'react'


const Header = () => {
  return (
    <div className="header">
       Header

       <div class="detail-pair">
         <label class="detail-pair-label" for="detail-pair-value-1">Select Role</label>
          <div class="detail-pair-value">
              <select class="select custom-select menumapping1" id="menumapping1" name="mapping1">
                <option selected="selected" value="1">
                  Manager
                </option>
                <option value="3">
                  Teacher
                </option>
                <option value="4">
                  Non-editing teacher
                </option>
                <option value="5">
                  Student
                </option>
                <option value="0">
                  None
                </option>
              </select>
      </div>

    </div>
    </div>
  )
}
export default Header
