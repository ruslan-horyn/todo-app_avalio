import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddTotoForm from "../AddTotoForm";

const mockSetTitle = jest.fn();

jest.mock('../../../viewControllers/useTotoViewController', () => ({
  useTodoViewController: () => ({
    title: '',
    setTitle: jest.fn().mockImplementation((...args) => mockSetTitle(...args)),
    addTodo: jest.fn(),
  }),
}));


describe('AddTotoForm', () => {
  it('should change input value and call "setTitle"', async () => {
    render(<AddTotoForm />);

    const input = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });
    
    await waitFor(() => {
      expect(mockSetTitle).toBeCalledTimes(1);
    });
    
    await waitFor(() => {
      expect(mockSetTitle).toBeCalledWith('test');
    });
  });
});