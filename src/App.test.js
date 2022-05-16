import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import TaskList from './components/TaskList';
import Create from './components/Create';
import Modify from './components/Modify';

test('Create one task', () => {
    const { result } = renderHook(() => Create('test task','1'));
    expect(result.current.props.name).toEqual({ name: 'test task' })
    })